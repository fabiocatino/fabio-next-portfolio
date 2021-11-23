import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(NextRequest) {
	// const token = NextRequest.headers.get('authorization').split(' ')[1];
	// const decoded = jwt.verify(token, process.env.JWT_SECRET);
	// var userId = decoded.id;
	// console.log(userId);

	if (NextRequest.method === 'GET') {
		let token;
		if (
			NextRequest.headers.get('authorization') &&
			NextRequest.headers.get('authorization').startsWith('Bearer')
		) {
			token = NextRequest.headers.get('authorization').split(' ')[1];
		}

		if (!token) {
			throw new Error('Unauthorized');
		}
	}
	return NextResponse.next();
}
