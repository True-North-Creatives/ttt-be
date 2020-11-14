import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
        },
        header: {
            background: '#0A0A0A',
            borderBottom: '2px solid #00aeef',
            color: 'white',
        },
        heading: {
            fontSize: 21,
            fontFamily: 'MontserratMedium',
        },
        icons: {
            color: '#00aeef',
            fontSize: '30px',
            fontWeight: '900',
        },
        description: {
            fontSize: 16,
            fontFamily: 'MontserratLight',
            color: 'white',
        },
        details: {
            backgroundColor: '#2B2B2B',
        },
    })
);

export default function CustomAccordion({ question }) {
    const classes = useStyles();
    let Questions = [
        {
            title: 'Who are you?',
        },
        {
            title: 'How are you?',
        },
        {
            title: 'Where are you?',
        },
        {
            title: 'What do you do?',
        },
    ];

    return (
        <div className={classes.root}>
            {Questions &&
                Questions.map((question, idx) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon className={classes.icons} />
                            }
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.header}
                        >
                            <Typography className={classes.heading}>
                                Qusetion {idx + 1} {question.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details}>
                            <Typography className={classes.description}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
        </div>
    );
}
