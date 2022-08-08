import {array} from "prop-types";

export enum PeoplesActionTypes {
    SEND_MESSAGE = "SEND-MESSAGE",
    CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"
}

export type PeoplesState = Array<IPeople>

export interface IPeople {
    id: number,
    name: string,
    img: string,
    messages: Array<IMessage>,
    newMessageText: string
}

export interface IMessage {
    author: 0 | 1,
    text: string,
    id: number
}

interface SendMessageAction {
    type: PeoplesActionTypes.SEND_MESSAGE
}

interface UpdateNewMessageTextAction {
    type: PeoplesActionTypes.CHANGE_MESSAGE_TEXT,
    payload: string
}

export type PeoplesActions = SendMessageAction | UpdateNewMessageTextAction;