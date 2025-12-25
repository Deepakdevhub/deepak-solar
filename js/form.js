/* ========================================
   DEEPAK SOLAR - Form Module
   Validation & Submission Handling
======================================== */

export function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // K-Number formatting
    const kNumberInput = document.getElementById('k-number');
    if (kNumberInput) {
        kNumberInput.addEventListener('input', (e) => {
            let value = e.target.value.toUpperCase();

            // Ensure starts with K
            if (value.length > 0 && value[0] !== 'K') {
                value = 'K' + value.replace(/^K*/i, '');
            }

            // Only allow K followed by numbers
            value = value.replace(/[^K0-9]/g, '');

            // Limit length
            if (value.length > 11) {
                value = value.substring(0, 11);
            }

            e.target.value = value;
        });
    }

    // Mobile number validation
    const mobileInput = document.getElementById('mobile');
    if (mobileInput) {
        mobileInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.substring(0, 10);
            }
            e.target.value = value;
        });
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        // Validate form
        if (!validateForm(form)) {
            showToast('कृपया सभी आवश्यक फ़ील्ड भरें', 'error');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.3"/>
                <path d="M12 2a10 10 0 0 1 10 10"/>
            </svg>
            <span>भेज रहे हैं...</span>
        `;

        try {
            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Submit to Web3Forms
            await submitToWeb3Forms(data);

            // Success
            showToast('धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे। 🌞', 'success');
            form.reset();

            // Show success animation
            showSuccessAnimation(submitBtn);

        } catch (error) {
            console.error('Form submission error:', error);
            showToast('कुछ गड़बड़ हो गई। कृपया फोन पर संपर्क करें।', 'error');
        } finally {
            // Restore button
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 2000);
        }
    });

    // Real-time validation feedback
    form.querySelectorAll('input[required], select[required]').forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateForm(form) {
    let isValid = true;

    form.querySelectorAll('input[required], select[required]').forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    // Additional validation for mobile
    const mobile = document.getElementById('mobile');
    if (mobile && mobile.value.length !== 10) {
        mobile.classList.add('error');
        isValid = false;
    }

    return isValid;
}

function validateField(input) {
    const value = input.value.trim();
    const isValid = value !== '' && input.checkValidity();

    if (isValid) {
        input.classList.remove('error');
        input.classList.add('valid');
    } else {
        input.classList.add('error');
        input.classList.remove('valid');
    }

    return isValid;
}

function submitToWeb3Forms(data) {
    return fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // User will need to replace this
            subject: `New Solar Inquiry from ${data.name} - ${data.district}`,
            from_name: 'Deepak Solar Website',
            ...data
        })
    }).then(response => response.json())
        .then(data => {
            if (data.success) {
                return data;
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        });
}

function showSuccessAnimation(button) {
    button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12" class="checkmark"/>
        </svg>
        <span>भेज दिया!</span>
    `;
    button.style.background = 'linear-gradient(135deg, #22C55E, #16A34A)';

    // Add checkmark animation
    const style = document.createElement('style');
    style.textContent = `
        .checkmark {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: checkmark 0.5s ease forwards;
        }
        @keyframes checkmark {
            to { stroke-dashoffset: 0; }
        }
    `;
    document.head.appendChild(style);
}

function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
        <span class="toast-message">${message}</span>
    `;

    // Style the toast
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%) translateY(100px)',
        padding: '12px 24px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        zIndex: '10000',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        background: type === 'success' ? 'linear-gradient(135deg, #22C55E, #16A34A)' :
            type === 'error' ? 'linear-gradient(135deg, #EF4444, #DC2626)' :
                'linear-gradient(135deg, #3B82F6, #1D4ED8)',
        color: 'white'
    });

    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Remove after delay
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Add form styles for validation states
const formStyles = document.createElement('style');
formStyles.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #EF4444 !important;
        background-color: #FEF2F2 !important;
    }
    
    .form-group input.valid,
    .form-group select.valid,
    .form-group textarea.valid {
        border-color: #22C55E !important;
    }
    
    .btn-submit:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(formStyles);
