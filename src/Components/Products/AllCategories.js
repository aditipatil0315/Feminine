import Maternity from "./Maternity";


const AllCategories = [
    {category: "Maternity", name: "Bio-Oil Original Skincare Oil suitable for Stretch Marks" , link : "https://amzn.in/d/doMwZLS", imgurl : "https://m.media-amazon.com/images/I/71yl5mKbEnL._SY355_.jpg"},
    {category: "Maternity", name: "LuvLap Stretch Mark Oil for pregnant ladies & new mothers" , link : "https://amzn.in/d/eIU3kJP", imgurl : "https://m.media-amazon.com/images/I/81vuy0BbuIL._SX679_.jpg"},
    {category: "Maternity", name: "Orimii Happy Belly Stretch Mark | Bump Body Butter & Belly Oil" , link : "https://amzn.in/d/boF3NhS", imgurl : "https://m.media-amazon.com/images/I/51gL-7Ve2ZL._SX522_PIbundle-2,TopRight,0,0_AA522SH20_.jpg"},
    {category: "Maternity", name: "LuvLap Ultra Thin Honeycomb Nursing Breast Pads, 48pcs, Disposable Maternity Pads" , link : "https://amzn.in/d/8cIBywI", imgurl : "https://m.media-amazon.com/images/I/81Bhkn9zKpL._SX679_.jpg"},
    {category: "Maternity", name: "LuvLap Washable Maternity Nursing Breast Pads, 6 Pcs, Reusable, Leak-Proof" , link : "https://amzn.in/d/bNLI3YV", imgurl : "https://m.media-amazon.com/images/I/81O0weA4NUL._SL1500_.jpg"},
    {category: "Maternity", name: "&Circus Maternity Bra | Feeding Bra | Nursing Bra for Women" , link : "https://amzn.in/d/2kKOtDN", imgurl : "https://m.media-amazon.com/images/I/615ON9DT4ZL._SY741_.jpg"},
    {category: "Maternity", name: "Lansinoh HPA Lanolin Nipple Cream | Sore Nipples Cracked Skin Breast Feeding 100% Natural " , link : "https://amzn.in/d/7MduK96", imgurl : "https://m.media-amazon.com/images/I/615t0AqBD7L._SL1500_.jpg"},
    {category: "Maternity", name: "PLETHEON 3-In-1 Post Pregnancy Abdominal Belt After Delivery Waist & Pelvis Shapewear Tummy Reduction " , link : "https://amzn.in/d/gJqvp1l", imgurl : "https://m.media-amazon.com/images/I/51So5GkhHzL._SX522_.jpg"},
    {category: "Maternity", name: "SNOWIE SOFT® Baby Feeding Pillow for Breastfeeding, Nursing Pillow with Infant Support Cushion" , link : "https://amzn.in/d/hyXYB9p", imgurl : "https://m.media-amazon.com/images/I/61ylzXgfH8L._SL1200_.jpg"},
    {category: "Maternity", name: "Abena Premium Maternity Pads for Women Super Absorption, Soft Disposable Pads" , link : "https://amzn.in/d/gGC01En", imgurl : "https://m.media-amazon.com/images/I/81mVvHnFS9L._SL1500_.jpg"},
    {category: "Maternity", name: "StarAndDaisy Maternity/Diaper Bag for Mothers-Diaper Bag for Baby Water Proof & Travel Friendly" , link : "https://amzn.in/d/cwj1OMF", imgurl : "https://m.media-amazon.com/images/I/61AP+sgGSiL._SL1000_.jpg"},
    {category: "Maternity", name: "motherly Belly Supporting Maternity Belt For Pregnancy (Black_IN, L)" , link : "https://amzn.in/d/f6klt9K", imgurl : "https://m.media-amazon.com/images/I/71zaGFoX2ML._SL1500_.jpg"},

    {category: "Periods", name: "Be Me Cramp Comfort PRO: Portable & Easy to use with Rechargeable Bigger Battery " , link : "https://amzn.in/d/6p9IYJw", imgurl : "https://m.media-amazon.com/images/I/71AhZ5rQXtL._SL1500_.jpg"},
    {category: "Periods", name: "MISS TAKE Teen Period Cramp Relief Roll On | Product for Period Pain Relief " , link : "https://amzn.in/d/dfeZA13", imgurl : "https://m.media-amazon.com/images/I/61mlUTPntjL._SL1500_.jpg"},
    {category: "Periods", name: "Nua Cramp Comfort || 3 Heat Patches for Period Pain and Cramps  " , link : "https://amzn.in/d/cTpMsB5", imgurl : "https://m.media-amazon.com/images/I/41gNNC+wvVL._SL1080_.jpg"},
    {category: "Periods", name: "Sirona Reusable Menstrual Cup for Women | Medium Size with Pouch Medical Grade Silicone " , link : "https://amzn.in/d/8yeY8uI", imgurl : "https://m.media-amazon.com/images/I/712U09cEseL._SL1500_.jpg"},
    {category: "Periods", name: " Pee Safe Menstrual Cup Steam Sterilizer | Clean Your Cup With Ease | Kills 99.9% Germs in 3 Minutes with Steam" , link : "https://amzn.in/d/bxlqZAk", imgurl : "https://m.media-amazon.com/images/I/510VpSUU8wL._SL1080_.jpg"},
    {category: "Periods", name: "Nua Overnight Disposable Period Panties | Pack of 5 | (S - M) | Heavy Flow " , link : "https://amzn.in/d/hsAhKOm", imgurl : "https://m.media-amazon.com/images/I/71rx3wFxGqL._SL1500_.jpg"},
    {category: "Periods", name: "Sanity Regular Applicator Tampons - Pack of 10 | Light to Medium Flow  " , link : "https://amzn.in/d/aYuqXwh", imgurl : "https://m.media-amazon.com/images/I/81Kj3fFyP7L._SL1500_.jpg"},
    {category: "Periods", name: " HEALTHFAB ; The Fabulous You GoPainFree Fast Period Pain Relief Cream" , link : "https://amzn.in/d/36NHtD2", imgurl : "https://m.media-amazon.com/images/I/511KeRl8pYL._SL1000_.jpg"},
    {category: "Periods", name: "Sirona Period Made Easy Tampons - 12 Piece | For Medium & Regular Flow | Biodegradable Tampons | FDA Approved " , link : "https://amzn.in/d/fI8V3Ya", imgurl : "https://m.media-amazon.com/images/I/61lyW7xx7vL._SL1500_.jpg"},
    {category: "Periods", name: "Pee Safe Menstrual Cup Wash 100ml | Orange Fragrance | Maintains Cup Hygiene | Wash your Period Cup in a Hygienic Way" , link : "https://amzn.in/d/c7oKjKc", imgurl : "https://m.media-amazon.com/images/I/51-1Csz4VZL._SL1080_.jpg"},


    {category: "Fertility", name: "Inaari Womb Health Ayurvedic Supplements for Fertility | Ayush Approved Tablet " , link : "https://amzn.in/d/ckF1TTu", imgurl : "https://m.media-amazon.com/images/I/71cwggXUXmL._SL1500_.jpg"},
    {category: "Fertility", name: "Prega Hope | Pre-Pregnancy Fertility Supplement (Pack of 30 Tabs) | With Iron, Folic Acid & Moringa | Lemon Flavor " , link : "https://amzn.in/d/8jvLQ8D", imgurl : "https://m.media-amazon.com/images/I/61LGjpCW5pL._SL1500_.jpg"},
    {category: "Fertility", name: "ZEROHARM Narie Fertility Formula Tablets | Natural Conception | Healthy Pregnancy " , link : "https://amzn.in/d/0keP6pY", imgurl : "https://m.media-amazon.com/images/I/51XpyJmI-RL._SL1080_.jpg"},


    {category: "Postpartum", name: "HANNEA® 500ml Portable Retractable Travel Bidet with 2 Nozzles for Toilet Handheld Postpartum Perineal Cleansing Childbirth Cleaner " , link : "https://amzn.in/d/6xSJ5Q1", imgurl : "https://m.media-amazon.com/images/I/617shNuOd1L._SL1024_.jpg"},
    {category: "Postpartum", name: "HealthSense Steamer for Cold & Cough, Vapourizer & Steamer for Face steam, Steam Inhaler " , link : "https://amzn.in/d/a5ZtdUF", imgurl : "https://m.media-amazon.com/images/I/61JUAq7WWzL._SL1500_.jpg"},
    {category: "Postpartum", name: " Sunveno Postpartum Sitz Bath-Perineal Care - Grey" , link : "https://amzn.in/d/4yogouq", imgurl : "https://m.media-amazon.com/images/I/51XvWFT+ewL._SL1500_.jpg"},


    {category: "Exercise", name: "Trainer Ideal for Postpartum Mothers Sedentary Lifestyles Thigh Fat Reduction and Shaping Home Gym Workout " , link : "https://amzn.in/d/bWPotHF", imgurl : " https://m.media-amazon.com/images/I/61-S7w4etML._SL1500_.jpg"},
    {category: "Exercise", name: " YOGTAPAS EVA +TPE Prenatal Yoga Mat for Pregnant Women 8mm Thick Anti-Skid," , link : "https://amzn.in/d/3YTJuCy", imgurl : "https://m.media-amazon.com/images/I/81eyWt80lpL._SL1500_.jpg"},
    // {category: "Exercise", name: " " , link : "", imgurl : ""},


    {category: "Pelvic", name: "Toriox Thigh Master Thigh Exerciser, Kegel Exercise Products for Women, Hip & Pelvic " , link : "https://amzn.in/d/fdu06al", imgurl : "https://m.media-amazon.com/images/I/51bT7LBenuL._SL1088_.jpg"},
    {category: "Pelvic", name: "Fidelis Healthcare Pelvic Traction Belt (Grey) - XXL) " , link : "https://amzn.in/d/075egFx", imgurl : "https://m.media-amazon.com/images/I/61P4E7AqtUL._SL1500_.jpg"},


    {category: "Menopause", name: "Arth Perimenopause Multi-Symptom Support Supplement Menopause Symptoms: Hot Flashes, Night Sweats, Mood Swings " , link : "https://amzn.in/d/gRpapCK", imgurl : "https://m.media-amazon.com/images/I/71aS6h6-YnL._SL1500_.jpg"},
    {category: "Menopause", name: " Magnetic Therapy Menopause Reliving Bracelet, Magnetic Bracelet for Women, Hot Flashes Menopause Bracelet," , link : "https://amzn.in/d/5DRkAsp", imgurl : "https://m.media-amazon.com/images/I/51BHsSF8XeL._SY695_.jpg"},
    {category: "Menopause", name: "Revital H for Woman with Multivitamins, Calcium, Zinc & Natural Ginseng for Daily Immunity Strong Bones " , link : "https://amzn.in/d/3VDBlX4", imgurl : "https://m.media-amazon.com/images/I/71cOb-wPIgL._SL1500_.jpg"},
    
    {category: "Vaginal", name: "Unived Vaginal Flora | Probiotic Strains that Promote Vaginal PH & Microbiota " , link : "https://amzn.in/d/0s4I3Rw", imgurl : "https://m.media-amazon.com/images/I/41WBKm3+eGL._SL1024_.jpg"},
    {category: "Vaginal", name: " AZAH Intimate Wipes for Women | AntiBacterial Vaginal Wipes Pack of 40 | pH Balanced Feminine Wipes " , link : "https://amzn.in/d/aEfI6YB", imgurl : "https://m.media-amazon.com/images/I/71+qHDt-nDL._SL1500_.jpg"},
    {category: "Vaginal", name: "VWash Plus Expert Intimate Hygiene, 350ml, Hygiene Wash for Women, Vaginal Wash, Prevents Itching, Irritation & Dryness, Suitable For All Skin Types " , link : "https://amzn.in/d/fcVYxTA", imgurl : "https://m.media-amazon.com/images/I/515XXxNTDQL._SL1000_.jpg"},
    {category: "Vaginal", name: " The Good Bug Good Down There SuperGut Powder for Women | Pre & Probiotic Supplement that Helps Reduce UTIs & Other Vaginal Infections" , link : "https://amzn.in/d/8wfsJVs", imgurl : "https://m.media-amazon.com/images/I/51+K50v6tAL._SL1080_.jpg"},
    
]

export default AllCategories;