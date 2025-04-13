import os
from dotenv import load_dotenv

load_dotenv()

APP_TITLE = os.getenv("APP_TITLE")
APP_VERSION = os.getenv("APP_VERSION")
APP_DESCRIPTION = os.getenv("APP_DESCRIPTION")

ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS")
ALLOWED_METHODS = ["*"]
ALLOWED_HEADERS = ["*"]

################################################  SAMPLE DATA BELOW ####################################################

INSURANCE_PROVIDERS_SAMPLE_DATA = [
    {
        "name": "ICICI Lombard",
        "description": "A leading private insurance provider offering comprehensive health, vehicle, and travel insurance.",
        "types_offered": "Health, Travel, Motor",
        "coverage_summary": "Covers hospitalization, daycare, OPD, and maternity.",
        "overall_rating": 4.5,
        "minimum_premium": 3500.00,
        "logo_url": "https://example.com/logos/icici.png",
        "website_url": "https://www.icicilombard.com/"
    },
    {
        "name": "HDFC ERGO",
        "description": "Joint venture between HDFC and ERGO International, known for digital claim services.",
        "types_offered": "Health, Critical Illness, Motor",
        "coverage_summary": "Cashless network hospitals, daily hospital cash, home care.",
        "overall_rating": 4.3,
        "minimum_premium": 3000.00,
        "logo_url": "https://example.com/logos/hdfc-ergo.png",
        "website_url": "https://www.hdfcergo.com/"
    },
    {
        "name": "Star Health Insurance",
        "description": "India’s first standalone health insurance provider with specialized senior citizen plans.",
        "types_offered": "Health, Accident",
        "coverage_summary": "Covers individual, family floater, and maternity with minimal waiting periods.",
        "overall_rating": 4.2,
        "minimum_premium": 2800.00,
        "logo_url": "https://example.com/logos/starhealth.png",
        "website_url": "https://www.starhealth.in/"
    },
    {
        "name": "Niva Bupa",
        "description": "Trusted name in health insurance offering quick claims and high customer satisfaction.",
        "types_offered": "Health, Personal Accident",
        "coverage_summary": "Covers pre and post hospitalization, health checkups, and COVID-19.",
        "overall_rating": 4.4,
        "minimum_premium": 3200.00,
        "logo_url": "https://example.com/logos/nivabupa.png",
        "website_url": "https://www.nivabupa.com/"
    },
    {
        "name": "Religare Health Insurance",
        "description": "Focused on affordable health and wellness insurance products with wide coverage.",
        "types_offered": "Health, Critical Illness",
        "coverage_summary": "Global coverage, daycare procedures, cashless facility.",
        "overall_rating": 4.1,
        "minimum_premium": 2500.00,
        "logo_url": "https://example.com/logos/religare.png",
        "website_url": "https://www.careinsurance.com/"
    },
    {
        "name": "Tata AIG",
        "description": "Joint venture between Tata Group and American International Group, offers diverse plans.",
        "types_offered": "Health, Travel, Motor",
        "coverage_summary": "Wide network, accident coverage, pre-existing illness support.",
        "overall_rating": 4.0,
        "minimum_premium": 2700.00,
        "logo_url": "https://example.com/logos/tataaig.png",
        "website_url": "https://www.tataaig.com/"
    },
    {
        "name": "Bajaj Allianz",
        "description": "Known for flexible plans and high claim settlement ratios in urban and rural India.",
        "types_offered": "Health, Travel, Motor",
        "coverage_summary": "Family floater plans, maternity, cancer care options.",
        "overall_rating": 4.6,
        "minimum_premium": 3100.00,
        "logo_url": "https://example.com/logos/bajaj.png",
        "website_url": "https://www.bajajallianz.com/"
    },
    {
        "name": "Future Generali",
        "description": "Provides innovative health plans with mental health and wellness benefits.",
        "types_offered": "Health, Group Insurance",
        "coverage_summary": "Teleconsultation, behavioral health, and daycare procedures.",
        "overall_rating": 4.0,
        "minimum_premium": 2600.00,
        "logo_url": "https://example.com/logos/futuregenerali.png",
        "website_url": "https://general.futuregenerali.in/"
    },
    {
        "name": "Max Bupa Health Insurance",
        "description": "Offers fast cashless approvals and lifelong renewability options.",
        "types_offered": "Health, Maternity, Wellness",
        "coverage_summary": "Emergency ambulance, second medical opinion, free annual health check-up.",
        "overall_rating": 4.4,
        "minimum_premium": 3400.00,
        "logo_url": "https://example.com/logos/maxbupa.png",
        "website_url": "https://www.maxbupa.com/"
    },
    {
        "name": "Aditya Birla Capital",
        "description": "Comprehensive health insurance with wellness reward programs and EMI options.",
        "types_offered": "Health, Wellness, Critical Illness",
        "coverage_summary": "OPD coverage, chronic management, health assessments.",
        "overall_rating": 4.3,
        "minimum_premium": 3300.00,
        "logo_url": "https://example.com/logos/abcapital.png",
        "website_url": "https://healthinsurance.adityabirlacapital.com/"
    }
]