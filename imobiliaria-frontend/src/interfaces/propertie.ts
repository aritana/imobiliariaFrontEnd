import { CreateAddressInterface } from "./address";
import { UserInterface } from "./user";

export interface PropertieInterface {
    id?: string;
    type: 'casa' | 'apartamento';
    roomsAmount: number;
    suitesAmount: number;
    livingRoomsAmount: number;
    diningRoomsAmount: number;
    parkingAmount: number;
    builtInCabinetsAmount: number;
    rentValue: number;

    floor?: number;
    condominiumValue?: number;
    fullConcierge?: boolean;

    description?: string;

    ownerId: string;
    adress: CreateAddressInterface;
    owner: UserInterface;
}

export type CreatePropertieInterface = Omit<PropertieInterface, 'id' | 'owner' | 'ownerId'>;