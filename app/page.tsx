import styles from './page.module.css';

export default function MaintenancePage() {
    return (
        <>
            <div className={styles.container}>
                {/* Left Banner */}
                <div className={styles.leftPanel}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoIcon}>
                            <img src="/logo.svg" alt="logo" width={32} height={32} />
                        </div>
                        <span className={styles.logoText}>GoldCard</span>
                    </div>
                    
                    <div className={styles.title}>
                        支付无界<br />
                        <span className={styles.titleHighlight}>全新G卡平台</span>
                    </div>
                    
                    <div className={styles.subtitle}>
                        安全便捷的支付解决方案
                    </div>
                    
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.featureIconWrapper}>
                                {/* Lock Icon */}
                                <svg viewBox="0 0 24 24">
                                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                </svg>
                            </div>
                            <div className={styles.featureTitle}>安全加密</div>
                            <div className={styles.featureDesc}>银行级安全保障</div>
                        </div>
                        
                        <div className={styles.feature}>
                            <div className={styles.featureIconWrapper}>
                                {/* Card Icon */}
                                <svg viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                </svg>
                            </div>
                            <div className={styles.featureTitle}>方便快捷</div>
                            <div className={styles.featureDesc}>卡片即开即用</div>
                        </div>
                        
                        <div className={styles.feature}>
                            <div className={styles.featureIconWrapper}>
                                {/* Arrow Icon */}
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                            </div>
                            <div className={styles.featureTitle}>全球通用</div>
                            <div className={styles.featureDesc}>广告支付无忧</div>
                        </div>
                    </div>
                </div>

                {/* Right Maintenance Card */}
                <div className={styles.rightWrapper}>
                    <div className={styles.loginCard}>
                        <div className={styles.cardTitle}>系统维护中</div>
                        <div className={styles.cardSubtitle}>
                            为了提供提供更好的服务，由于系统正在进行升级维护，给您带来的不便敬请谅解。
                        </div>
                        
                        <div className={styles.maintenanceInfo}>
                            <div className={styles.timeBox}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                </svg>
                                15:00 - 16:00
                            </div>
                            
                            <img src="/telegram.jpg" alt="Telegram客服" className={styles.qrCode} />
                            <div className={styles.qrHint}>紧急问题请扫码联系客服</div>
                        </div>
                    </div>
                    
                    <div className={styles.securityLinks}>
                        <span>
                            <svg viewBox="0 0 24 24">
                                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            </svg> 256位加密
                        </span>
                        <span className={styles.dot}>•</span>
                        <span>PCI DSS 认证</span>
                        <span className={styles.dot}>•</span>
                        <span>WAF防火墙</span>
                    </div>
                </div>
            </div>

            {/* Float Chat Icon */}
            <div className={styles.chatBtn}>
                <svg viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                Copyright © 2024-2025 GoldCard Pay All Rights Reserved.
            </div>
        </>
    );
}
