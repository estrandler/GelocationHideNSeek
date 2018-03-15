import { Component } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs/Observable';

@WebSocketGateway({namespace: 'seeker'})
export class SeekerGateway {
    constructor() {

    }

    @SubscribeMessage('seekerPositionMoved')
    onEvent(client, data): WsResponse<any> {
        const event = 'seekerPositionMoved';
        const response = [1, 2, 3];
        return { event, data };
    }
}