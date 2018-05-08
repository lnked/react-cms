// interface ArbitraryFn {
//     work: string;
// }

// export function defer (work: ArbitraryFn): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//         if (document.readyState === 'loading') {
//             document.addEventListener('DOMContentLoaded', () => {
//                 work()
//                 resolve(true)
//             })
//         } else {
//             work()
//             reject(false)
//             resolve(false)
//         }
//     })
// }
