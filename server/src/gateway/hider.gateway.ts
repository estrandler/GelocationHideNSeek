import { Component } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage, WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs/Observable';

@WebSocketGateway({namespace: 'hider'})
export class HiderGateway {
    constructor() {

    }

    @SubscribeMessage('hiderPositionMoved')
    onEvent(client, data): WsResponse<any> {
        const event = 'hiderPositionMoved';
        
        

        return { event, data };
    }
}