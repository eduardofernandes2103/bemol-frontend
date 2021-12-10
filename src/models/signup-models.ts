export interface SignupModel {
    name: string,
    password_hash: string,
    passwordConfirm?: string,
    email: string,
    zipcode: string,
    street: string,
    number?: number,
    complement?: string,
    city: string
}