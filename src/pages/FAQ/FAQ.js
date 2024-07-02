import React, { useEffect, useState } from 'react';
import '../Homepage/style.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Collapse, Container, useMediaQuery } from '@mui/material';
import arrow from '../../assets/img/faq_arrow.png';
import Fade from 'react-reveal/Fade';
import { getFAQ } from '../../service/api';

export default function FAQ() {
  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(min-width: 1199.99px)')

  useEffect(() => {
    window.scrollTo({ top:0, left:0, behavior: "instant"})
  }, [])

  const [faqData, setFaqData] = useState([]);
  const [questionCategories, setQuestionCategories] = useState([]);
  useEffect(() => {
    getData();
  }, [])
  
  const getData = async(e) => {
    const res = await getFAQ();
    const tempData = res.data?.data || [];
    setFaqData(tempData);

    const categories = tempData.map((data) => data.section_title);
    setQuestionCategories(categories);
    setActiveCategory(categories[0]);
  }
  
  const [expandedIndex, setExpandedIndex] = useState(null);
  function toggleExpandedIndex(index) {
    if (index === expandedIndex) {
      setExpandedIndex(null);
      return;
    }
    setExpandedIndex(index);
  }

  const [activeCategory, setActiveCategory] = useState(questionCategories[0]);
  const activeQuestions = faqData.find(faq => faq.section_title === activeCategory)?.items_faq || [];

  return (
    <Box className='bg-content d-flex flex-column faq'>
      <Header />
      {smallDeviceSize ?
      <Container className='faq-container-content'>
        <Fade right cascade>
          <Box className='text-center'><p className='content Oswald-700 s-6495'>FAQ</p></Box>
        </Fade>
        <Fade delay={150}>
          <Box><p className='Din-700 s-4852'>Have a questions? Look here.</p></Box>
        </Fade>
        <Box className="row">
          <Box>
            {faqData.map((faq, index) => {
              return (
                <Box className='p-2 faq-mb-category' key={'questionCategory-' + index}>
                  <Box className='faq-pb-category'><p className='Din-400 section-title' >{faq.section_title}</p></Box>
                  <Box>
                  {(faq.items_faq || []).map((questionData, index) => 
                    <Box className='question-item px-2' key={'question-' + index}>
                      <Box onClick={() => toggleExpandedIndex(questionData.question)} className='d-flex justify-content-between align-items-center'>
                        <Box>
                          {/* <p className='Din-400 s-2426'>{questionData.question}</p> */}
                          <p className='Din-400 s-2426' dangerouslySetInnerHTML={{__html: questionData.question}}></p>
                          </Box>
                        <Box><img loading="lazy"  src={arrow} alt='' className='acc trans pointer' style={{ transform: expandedIndex === questionData.question ? "rotate(180deg)":"" }} /></Box>
                      </Box>
                      <Collapse in={expandedIndex === questionData.question}>
                        {/* <p className='Din-400 s-2030'>
                          {questionData.answer}
                        </p> */}
                        <p className='Din-400 s-2030' dangerouslySetInnerHTML={{__html: questionData.answer}}></p>
                      </Collapse>
                    </Box>)}
                  </Box>
                </Box>)
            })}
          </Box>
        </Box>
      </Container>
      :
      <Container className='faq-container-content'>
        <Box className='text-center'><p className='Oswald-700 s-6495'>FAQ</p></Box>
        <Box className='text-center m-100'><p className='Din-700 s-4852'>Have a questions? Look here.</p></Box>
        <Box className="d-flex col-12 justify-content-between">
          {/* CATEGORIES */}
          <div className='col-3 category-border'>
            {questionCategories.map((questionCategory, index) => {
              return (
                <Box color={activeCategory === questionCategory ? '#DAFF01' : '#FFF'}
                  key={'category-' + index}
                  className='pointer pt-2 pb-4'
                  onClick={() => setActiveCategory(questionCategory)}>
                  <p className='Din-700 s-3240 faq-hover' >{questionCategory}</p>
                </Box>)
            })}
          </div>

          {/* QUESTIONS LIST */}
          <div className='col-8'>
            {activeQuestions.map((questionData, index) =>
              <Box className='question-item' key={'activeQuestion-' + index}>
                <Box onClick={() => toggleExpandedIndex(questionData.question)} className='d-flex justify-content-between align-items-center pointer'>
                  <Box>
                    {/* <p className='Din-700 s-2426'>{questionData.question}</p> */}
                    <p className='Din-700 s-2426' dangerouslySetInnerHTML={{__html: questionData.question}}></p>
                    </Box>
                  <Box><img loading="lazy"  src={arrow} alt='' className='acc trans' style={{ transform: expandedIndex === questionData.question ? "rotate(180deg)":"" }} /></Box>
                </Box>
                <Collapse in={expandedIndex === questionData.question}>
                  {/* <p className='Din-400 s-2030 pt-2'>
                    {questionData.answer}
                  </p> */}
                  <p className='Din-400 s-2030 pt-2' dangerouslySetInnerHTML={{__html: questionData.answer}}></p>
                </Collapse>
              </Box>)}
          </div>
        </Box>
      </Container>}
      <Footer />
    </Box>
  )
}