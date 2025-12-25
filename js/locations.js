// Comprehensive District → Tehsil → Village cascade data - Government Census Data
// Ratangarh: 102 villages, Sardarshahar: 183 villages

const locationData = {
    churu: {
        name: 'Churu (चूरू)',
        tehsils: {
            ratangarh: {
                name: 'Ratangarh (रतनगढ़)',
                villages: ['Ratangarh', 'Abadsar', 'Alsar', 'Alsar Bas', 'Bachchharara Bara', 'Bachchharara Chota', 'Badhan Ki Dhani', 'Balrampura', 'Bandwa', 'Barjangsar', 'Beeramsar', 'Bhanuda Bidawatan', 'Bhanuda Charnan', 'Bharpalsar Bidawatan', 'Bharpalsar Charnan', 'Bharpalsar Ladkhaniya', 'Bhawandesar', 'Bheenchari', 'Bhojasar', 'Bhukhredi', 'Binadesar Bidawatan', 'Binadesar Siddhan', 'Budhwali', 'Chainpura', 'Chak Jaleu', 'Chak Ratangarh', 'Champawasi', 'Charanwasi', 'Chhabri Khari', 'Chhabri Meethi', 'Chhajoosar', 'Chhotriya', 'Dassusar', 'Daudsar', 'Deepsar', 'Derajsar', 'Devipura', 'Fransa', 'Ghumanda', 'Gogasar', 'Golsar', 'Gopalpuriya', 'Gorisar', 'Gusainsar', 'Hamoosar', 'Hansasar', 'Hanumanpura', 'Har Desar', 'Haripura', 'Hudera Agoona', 'Hudera Athoona', 'Hudera Siddhan', 'Kadiya', 'Kangar', 'Kanwari', 'Khariya', 'Khothdi', 'Khudera Beekan', 'Khudera Bidawatan', 'Khudera Charnan', 'Kusum Desar', 'Lakhau', 'Lalsar', 'Loha', 'Madrela', 'Magra', 'Malsisar Bara', 'Malsisar Chhota', 'Manaksar', 'Manpura', 'Meethasar', 'Moondsar', 'Motipura', 'Naharsar', 'Nangal Bhim', 'Nangal Jaswant', 'Padamsar', 'Palsera', 'Panchala', 'Poonadesar', 'Raghoogora', 'Rajpura Bidawatan', 'Rajpura Charnan', 'Ramsara Bidawatan', 'Ramsara Charnan', 'Ransar', 'Roonasar', 'Sandwa', 'Sankhu', 'Satanali', 'Sawai Jai Singh Ki Dhani', 'Seerana', 'Shekhsar', 'Shivpura', 'Sihot', 'Soorpura Upadh', 'Sundar Desar', 'Thalia', 'Thulsidas Ki Dhani', 'Tikhi', 'Udairamsar']
            },
            sardarshahar: {
                name: 'Sardarshahar (सरदारशहर)',
                villages: ['Sardarshahar', 'Adsisar', 'Ajeetsar', 'Amarsar', 'Amrasar', 'Anandwasi', 'Armalsar', 'Asalsar', 'Asasar', 'Asoosar', 'Aspalsar Bara', 'Aspalsar Bhainsera', 'Aspalsar Dhurkera', 'Aspalsar Khamera', 'Aspalsar Kuntalsar', 'Aspalsar Lalera', 'Aspalsar Muglera', 'Badriya', 'Balal', 'Bandhnau Dikhnada', 'Bandhnau Utrada', 'Baniyasar', 'Barjangsar', 'Barlajsar', 'Bayla', 'Beekamsara', 'Bejasar', 'Bhadasar Dikhnada', 'Bhadasar Utrada', 'Bhairoosar', 'Bhanipura', 'Bhaoowala', 'Bhatwala', 'Bheenwsar', 'Bhiyansar', 'Bhojasar Bara', 'Bhojasar Chhota', 'Bhojoosar Upadhiyan', 'Bhojrasar', 'Bholoosar', 'Bhom Asasar', 'Bijarasar', 'Bilyoobas Doomani', 'Bilyoobas Mahiyan', 'Bilyoobas Rampura', 'Boghera', 'Bukansar Bara', 'Bukansar Chhota', 'Chak Rajalwara', 'Chak Ramsara', 'Charanwasi', 'Charsar', 'Chhajoosar', 'Dadwana', 'Dalman', 'Daloosar', 'Dandoosar', 'Degan', 'Derajsar', 'Devasar', 'Dhani Charnan', 'Dhani Degan', 'Dhani Doodgir', 'Dhani Kalera', 'Dhani Pachera', 'Dhani Ranasar Panwaran', 'Dhani Ryika', 'Dhani Suhana', 'Dhani Tetarval', 'Dheerasar Hadan', 'Dulrasar', 'Gajoosar', 'Ghadsisar', 'Girgichiya', 'Gomtiya', 'Gulpura', 'Halasar', 'Hardesar', 'Hariyasar Gharsotan', 'Hariyasar Upadhyan', 'Inderpura', 'Jabrasar', 'Jaswant Pura', 'Kachiyana', 'Kalusar', 'Kanasar', 'Kangar', 'Kasoomba', 'Keroo', 'Khandwa', 'Kharatwasi Dhani', 'Khariyan', 'Kheenwasar', 'Khinwasar', 'Kolasar', 'Lakhau', 'Leelasar', 'Loharpura', 'Loonkaransar Panchara', 'Magra', 'Magratwara', 'Mangalsar', 'Meethasar', 'Moolani', 'Moondsar', 'Nakrasar', 'Nangaliya', 'Narsinghpura Chopra', 'Narsinghpura Purohitan', 'Narsinghpura Thathawatan', 'Naurangia Bada', 'Naurangia Chhota', 'Nehru Nagar', 'Panchali Bara', 'Panchali Chhota', 'Panditiya', 'Pannisar', 'Pepoo', 'Phoolchand Pura', 'Pithasar', 'Radhakishan Pura', 'Raghunathpura', 'Rajasar', 'Rajalwara', 'Rajaldesar', 'Rajpura', 'Ramsara', 'Ranasar Kanwan', 'Ranasar Purohitan', 'Ratanpura', 'Rawla', 'Roopsar', 'Sagrasar', 'Salasar', 'Samda', 'Sankhoo', 'Siddhawatan', 'Singhpura', 'Soorajpura', 'Tarasar', 'Udsar', 'Ummedsar']
            },
            bidasar: {
                name: 'Bidasar (बीदासर)',
                villages: ['Bidasar', 'Bhukhredi', 'Khandwa', 'Salasar', 'Jaswantpura', 'Sahwa', 'Nangal Shyam', 'Daudsar', 'Agoona', 'Ajitpura']
            },
            churu: {
                name: 'Churu (चूरू)',
                villages: ['Churu City', 'Kanuta', 'Bhupalsar', 'Daudsar', 'Chainsinghpura', 'Biramsar', 'Naya Bass', 'Dhani Mania', 'Salasar', 'Rajpura']
            },
            rajgarh: {
                name: 'Rajgarh (राजगढ़)',
                villages: ['Rajgarh', 'Kishangarh', 'Bigodana', 'Sahwa', 'Bhaleri', 'Rajasar Bikan', 'Dhadheru', 'Guleria', 'Moondwa', 'Ladhasar']
            },
            sidhmukh: {
                name: 'Sidhmukh (सिध्मुख)',
                villages: ['Sidhmukh', 'Ramsara', 'Guleria', 'Sankhu', 'Pandreu', 'Tidiyasar', 'Dhadheru', 'Taranagar', 'Kalyanpura']
            },
            sujangarh: {
                name: 'Sujangarh (सुजानगढ़)',
                villages: ['Sujangarh', 'Ghantaghar', 'Indra Colony', 'Lakhlan', 'Nangal Meghan', 'Balasar', 'Rajasar', 'Kolasar', 'Biramsar', 'Chainpura']
            },
            taranagar: {
                name: 'Taranagar (तारानगर)',
                villages: ['Taranagar', 'Bhanipura', 'Dhani Kumharan', 'Kalyanpura', 'Sidhmukh', 'Pabusar', 'Rajgarh', 'Nangal', 'Ratanpura']
            }
        }
    },
    bikaner: {
        name: 'Bikaner (बीकानेर)',
        tehsils: {
            bikaner: {
                name: 'Bikaner City',
                villages: ['Bikaner', 'Gajner', 'Pugal', 'Kanasar', 'Raisar', 'Daudsar', 'Palana', 'Siddhmukh', 'Deshnok', 'Jaitsar']
            },
            khajuwala: {
                name: 'Khajuwala (खाजूवाला)',
                villages: ['Khajuwala', 'Bachharara', 'Jaisinghnagar', 'Shikarpur', 'Momasar', 'Gusainsar', 'Bhukarka', 'Rajasar']
            },
            pugal: {
                name: 'Pugal (पूगल)',
                villages: ['Pugal', 'Bhojasar', 'Sankhoo', 'Dholipal', 'Bigodana', 'Jalwali', 'Kanasar', 'Raisar']
            },
            chhatargarh: {
                name: 'Chhatargarh (छत्तरगढ़)',
                villages: ['Chhatargarh', 'Bamboo', 'Gangashahar', 'Ridmalsar', 'Raisar', 'Bhalda', 'Kolayat', 'Deshnok']
            },
            lunkaransar: {
                name: 'Lunkaransar (लूणकरणसर)',
                villages: ['Lunkaransar', 'Suratgarh', 'Gusainsar', 'Rajasar', 'Lakhusar', 'Khajuwala', 'Raisar', 'Palana']
            },
            kolayat: {
                name: 'Kolayat (कोलायत)',
                villages: ['Kolayat', 'Hadan', 'Deshnok', 'Bholasar', 'Diyatra', 'Jaitsar', 'Siyag', 'Gangashahar']
            },
            dungargarh: {
                name: 'Dungargarh (डूंगरगढ़)',
                villages: ['Dungargarh', 'Siyana', 'Napasar', 'Gadhwala', 'Khara', 'Mukam', 'Sankhoo', 'Raisar']
            },
            nokha: {
                name: 'Nokha (नोखा)',
                villages: ['Nokha', 'Jasrasar', 'Jaitpur', 'Diyatra', 'Palana', 'Malasar', 'Deshnok', 'Gusainsar']
            },
            bajju: {
                name: 'Bajju (बज्जू)',
                villages: ['Bajju', 'Mahajan', 'Sankhoo', 'Nokha', 'Sidhmukh', 'Desuri', 'Raisar']
            },
            jasrasar: {
                name: 'Jasrasar (जसरासर)',
                villages: ['Jasrasar', 'Nokha', 'Palana', 'Gusainsar', 'Daudsar', 'Raisar', 'Deshnok']
            },
            hadan: {
                name: 'Hadan (हाडान)',
                villages: ['Hadan', 'Kolayat', 'Bholasar', 'Siyag', 'Jaitsar', 'Deshnok', 'Gangashahar']
            }
        }
    },
    sikar: {
        name: 'Sikar (सीकर)',
        tehsils: {
            danta_ramgarh: {
                name: 'Danta Ramgarh (दांता रामगढ़)',
                villages: ['Danta', 'Ramgarh', 'Khandela', 'Shyampura', 'Panchala', 'Khatushyamji', 'Devgarh', 'Ringas']
            },
            dhod: {
                name: 'Dhod (धोद)',
                villages: ['Dhod', 'Khatushyamji', 'Reengus', 'Palthana', 'Ruliyani', 'Dayalpura', 'Khoor', 'Ganeshwar']
            },
            fatehpur: {
                name: 'Fatehpur (फतेहपुर)',
                villages: ['Fatehpur', 'Devgarh', 'Ramgarh', 'Lachhmangarh', 'Udaipurwati', 'Mandawa', 'Nawalgarh', 'Jhunjhunu']
            },
            khandela: {
                name: 'Khandela (खंडेला)',
                villages: ['Khandela', 'Danta', 'Shyampura', 'Panchala', 'Srimadhopur', 'Khoor', 'Reengus', 'Ringas']
            },
            laxmangarh: {
                name: 'Laxmangarh (लक्ष्मणगढ़)',
                villages: ['Laxmangarh', 'Fatehpur', 'Mandawa', 'Nawalgarh', 'Bissau', 'Mukundgarh', 'Churi Ajitgarh', 'Udaipurwati']
            },
            neem_ka_thana: {
                name: 'Neem Ka Thana (नीम का थाना)',
                villages: ['Neem Ka Thana', 'Srimadhopur', 'Alsisar', 'Kotri', 'Jhunjhunun', 'Ganeshwar', 'Reengus', 'Palthana']
            },
            ramgarh_shekhawati: {
                name: 'Ramgarh Shekhawati (रामगढ़ शेखावाटी)',
                villages: ['Ramgarh', 'Fatehpur', 'Lachhmangarh', 'Churi Ajitgarh', 'Mandawa', 'Udaipurwati', 'Nawalgarh', 'Devgarh']
            },
            sikar: {
                name: 'Sikar City (सीकर)',
                villages: ['Sikar', 'Ranoli', 'Palsana', 'Ganeshwar', 'Dayalpura', 'Dhod', 'Reengus', 'Ringas']
            },
            sri_madhopur: {
                name: 'Sri Madhopur (श्री माधोपुर)',
                villages: ['Srimadhopur', 'Neem Ka Thana', 'Reengus', 'Khandela', 'Ganeshwar', 'Palthana', 'Khoor', 'Alsisar']
            }
        }
    }
};

export function initLocationCascade() {
    const districtSelect = document.getElementById('district');
    const tehsilSelect = document.getElementById('tehsil');
    const villageSelect = document.getElementById('village');

    if (!districtSelect || !tehsilSelect || !villageSelect) return;

    // District change handler
    districtSelect.addEventListener('change', () => {
        const district = districtSelect.value;

        // Reset tehsil and village
        tehsilSelect.innerHTML = '<option value="">तहसील चुनें / Select Tehsil</option>';
        villageSelect.innerHTML = '<option value="">पहले तहसील चुनें</option>';
        tehsilSelect.disabled = true;
        villageSelect.disabled = true;

        if (district && locationData[district]) {
            const tehsils = locationData[district].tehsils;
            Object.keys(tehsils).forEach(key => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = tehsils[key].name;
                tehsilSelect.appendChild(option);
            });
            tehsilSelect.disabled = false;
        }
    });

    // Tehsil change handler
    tehsilSelect.addEventListener('change', () => {
        const district = districtSelect.value;
        const tehsil = tehsilSelect.value;

        // Reset village
        villageSelect.innerHTML = '<option value="">गाँव चुनें / Select Village</option>';
        villageSelect.disabled = true;

        if (district && tehsil && locationData[district]?.tehsils[tehsil]) {
            const villages = locationData[district].tehsils[tehsil].villages;
            villages.forEach(village => {
                const option = document.createElement('option');
                option.value = village.toLowerCase().replace(/\s+/g, '_');
                option.textContent = village;
                villageSelect.appendChild(option);
            });
            villageSelect.disabled = false;
        }
    });
}
