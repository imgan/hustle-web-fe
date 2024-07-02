// Functional
const ROUTES_FUNCTIONAL = '/training/functional'

// Personal Trainer
const ROUTES_PERSONAL_TRAINER = '/training/personal-trainer'

// Pilates
const ROUTES_PILATES = '/training/pilates'

// Cycling
const ROUTES_CYCLING = '/training/cycling'

// ROUTES_TRAINING_CUSTOM_PAGE
const ROUTES_TRAINING_CUSTOM_PAGE = '/training/:page_title'

// Recovery
const ROUTES_RECOVERY = '/recovery'

// TERMS OF SERVICE
const ROUTES_TERMS_OF_SERVICE = '/terms-of-service'

// PRIVACY POLICY
const ROUTES_PRIVACY_POLICY = '/privacy-policy'

// FUEL
const ROUTES_FUEL = '/fuel'

// FAQ
const ROUTES_FAQ = '/faq'

// Homepage
const ROUTES_HOMEPAGE = '/'

// About Us
const ROUTES_ABOUT_US = '/about-us'

// Contact Us
const ROUTES_CONTACT_US = '/contact-us'

// Promo
const ROUTES_PROMO = '/partner'



export default class RoutesPage {
    // Functional
    static get RouteFunctional() {
        return ROUTES_FUNCTIONAL;
    }

    // Personal Trainer
    static get RoutePersonalTrainer() {
        return ROUTES_PERSONAL_TRAINER;
    }

    // Pilates
    static get RoutePilates() {
        return ROUTES_PILATES;
    }

    // Cycling
    static get RouteCycling() {
        return ROUTES_CYCLING;
    }

    // Cycling
    static get RouteTrainingCustomPage() {
        return ROUTES_TRAINING_CUSTOM_PAGE;
    }

    // Recovery
    static get RouteRecovery() {
        return ROUTES_RECOVERY;
    }

    // FAQ
    static get RouteFAQ() {
        return ROUTES_FAQ;
    }

    // Homepage
    static get RouteHomepage() {
        return ROUTES_HOMEPAGE;
    }

    // TermsOfService
    static get RouteTermsOfService() {
        return ROUTES_TERMS_OF_SERVICE;
    }

    // PrivacyPolicy
    static get RoutePrivacyPolicy() {
        return ROUTES_PRIVACY_POLICY;
    }

    // Fuel
    static get RouteFuel() {
        return ROUTES_FUEL;
    }

    // About Us
    static get RouteAboutUs() {
        return ROUTES_ABOUT_US;
    }

    // Contact Us
    static get RouteContactUs() {
        return ROUTES_CONTACT_US;
    }

    // Promo
    static get RoutePromo() {
        return ROUTES_PROMO;
    }
}