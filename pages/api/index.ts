import { NextApiRequest, NextApiResponse } from 'next';
import { getDate } from '../../services/utils/date';

interface IDefaultResponse {
    message: string;
    date: string;
}

export default function (request: NextApiRequest, response: NextApiResponse<IDefaultResponse>): void {
    return response.status(200).json({
        message: "Hello! this is iFix API.",
        date: getDate()
    })
}