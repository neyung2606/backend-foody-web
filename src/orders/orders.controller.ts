import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, ParseIntPipe, Delete, Patch, UseGuards } from '@nestjs/common';

@Controller('orders')
export class OrdersController {}
